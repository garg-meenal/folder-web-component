<svelte:options tag="folder-component" />
<script lang="ts">
  import { v4 as uuidv4 } from 'uuid';
  import { onMount } from 'svelte';
  import { selectedType, folders, selectedFolder, selectedLevel } from '../store.js';
  export let is_user_authenticated = true;
  let name = '';
  let types = ["File", "Folder"];
  let showForm: boolean = true;
  let alreadyExistsErrorMsg = '';
  onMount(() => {
		//creating default root folder
    const defaultRootFolder = {
      id: uuidv4(),
      name: 'DefaultFolder',
      files: [],
      level: 'root',
      type: 'folder'
    };
    folders.update(data =>{
      if(data && data.length === 0)
        data.push(defaultRootFolder);
      return data;
    });
	});

  function onSave(){
    if (name && $selectedType) {
      showForm = false;
      if ($selectedType === 'File' && $selectedFolder) {
        createFile(name);
      } else if ($selectedType === 'Folder' && $selectedLevel) {
        const parentFolder = $selectedLevel === 'At Root' ? null : $selectedLevel;
        createFolder(name, parentFolder);
      }
    }else{
      reset();
    }
  }
  
function createFile(fileName){
  const newFile = {
    id: uuidv4(),
    name: fileName,
    type: 'file'
  };
  folders.update(data =>{
    const folder = findFolderByName(data, $selectedFolder.name);
    if (folder) {
    folder.files.push(newFile);
    }
    return data;
  })
}

  function findFolderById(data, id) {
    for (const folder of data) {
      if (folder.id === id) {
        return folder;
      } else if (folder.files?.length > 0) {
        const foundFolder = findFolderById(folder.files, id);
        if (foundFolder) {
          return foundFolder;
        }
      }
    }
    return null;  
  }

  function findFolderByName(data, name) {
    for (const folder of data) {
      if (folder.name === name) {
        return folder;
      } else if (folder.files?.length > 0) {
        const foundFolder = findFolderByName(folder.files, name);
        if (foundFolder) {
          return foundFolder;
        }
      }
    }
    return null;  
  }


  function createFolder(folderName, parentFolder){
    const newFolder = {
      id: uuidv4(),
      name: folderName,
      files: [],
      level: parentFolder === null ? 'root' : parentFolder.level === 'root' ? 'first' : 'second',
      type: 'folder'
    }
    folders.update(data =>{
      if (parentFolder === null) {
      data.push(newFolder);
      } else {
      const parent = findFolderByName(data, parentFolder.name);
      if (parent) {
        parent.files.push(newFolder);
      }
    }
    return data;
    });
  }

  function onCancel(){
    reset();
  }

  function reset(){
    //reset form
    name = "";
    selectedType.set('');
    selectedFolder.set(null);
    selectedLevel.set(null);
  }
  
  function checkIfNameExists(){
    const exisiting = findFolderByName($folders, name);
    if(exisiting){
      alreadyExistsErrorMsg = 'Name already exists';
      name='';
    }else{
      alreadyExistsErrorMsg = '';
    }
  }
</script>

<div class="card">
  {#if is_user_authenticated}
    {#if showForm}
      <h1>Folder Form</h1>
      <form>
      <table>
        <tr>
          <td><label for="fileName">File/Folder Name:</label></td>
          <td><input required placeholder = "Enter File/Folder Name" bind:value={name}
            on:blur={()=> checkIfNameExists()}/>
          </td>
        </tr>
        <tr>
          <td></td>
          <td><span class="errorMsg">{alreadyExistsErrorMsg}</span></td>
        </tr>
        <tr>
          <td><label for="type">Type:</label></td>
          <td>
            <select bind:value={$selectedType} required>
              {#each types as type}
              <option value={type}>{type}</option>
              {/each}
            </select> 
          </td>
        </tr>
        {#if $selectedType === "File"}
        <tr>
          <td>
            <label for="folder">Select Folder:</label>
          </td>
          <td>
            <select bind:value={$selectedFolder}>
              {#each $folders as folder}
              <option value={folder}>{folder.name}</option>
              {#if folder.files}
                {#each folder.files as file}
                  {#if file.type === 'folder'}
                  <option value={file}>{file.name}</option>
                  {/if}
                {/each}
              {/if}
              {/each}
            </select>
          </td>
        </tr>
        {/if}
        {#if $selectedType === "Folder"}
        <tr>
          <td>
            <label for="folder">Select Level:</label>
          </td>
          <td>
            <select bind:value={$selectedLevel}>
              <option>At Root</option>
              {#each $folders as folder}
                <option value={folder}>{folder.name}</option>
              {/each}
            </select>
          </td>
        </tr>
        {/if}
        <tr>
          <td>
            <button on:click="{onCancel}">Cancel</button>
          </td>
          <td>
            <button on:click="{onSave}" disabled={alreadyExistsErrorMsg !== ''}>Save</button>
          </td>
        </tr>
      </table>
      </form>
    {/if}
    <div id="showHierarchy">
      {#if !showForm}
        <h1>Folder Hierarchy</h1>
        <div id="folders">
          <ul>
            {#each $folders as folder}
            <li>
              <span>{folder.name}</span>
            </li>
            {#if folder.files}
              <ul>
                {#each folder.files as item}
                  <li>{item.name}</li>
                  {#if item.files}
                    <ul>
                      {#each item.files as file}
                      <li>file</li>
                      {/each}
                    </ul>
                  {/if}
                {/each}
              </ul>
            {/if}
            {/each}
          </ul>
        </div>
        <button on:click={()=>{ reset(); showForm = true}}>Back</button>
      {/if}
    </div>
  {:else}
    <h1 class="error">User is not authenticated!</h1>
  {/if}
</div>

<style lang="scss">
  .card{
    background-color: #b8c0d8;
    width: fit-content;
    padding: 30px;
    margin: auto;
    margin-top: 50px;
    vertical-align: middle;
    h1{
      margin:0px;
      margin-bottom: 20px;
      text-align:center;
      font-size: 3.2em;
      line-height: 1.1;
      font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
    }
    input {
		display: block;
		width: 193px;
    height: 25px;
	  }
    .errorMsg{
      color: red;
      font-size: 12px;
    }
    select {
		display: block;
		width: 200px;
    text-align: center;
    height: 30px;
	  }
    #folders{
    text-align: left;
    padding: 20px 40px 20px 20px;
    }
    table{
      td{
        padding-bottom: 10px;
      }
    }
    button{
    display: block;
    margin: auto;
    width: 100px;
    height: 30px;
      &:hover{
        background-color: #3e67d9;
        font-weight: bold;
        cursor: pointer;
      }
      &:disabled{
        cursor: default;
        background-color: grey;
        font-weight: bold;
      }
    }
    .error{
      color: red;
    }
  }

</style>