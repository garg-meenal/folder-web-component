<svelte:options tag="Folder-Component"></svelte:options>
<script lang="ts">
  import { v4 as uuidv4 } from 'uuid';
  import { onMount } from 'svelte';
  import { selectedType, folders, selectedFolder, selectedLevel } from '../store.js';
  let name = "";
  let types = ["File", "Folder"];
  let showForm: boolean = true;
  
  onMount(() => {
		//creating default root folder
    const defaultRootFolder = {
      id: uuidv4(),
      name: 'DefaultFolder',
      files: [],
      level: 'root'
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
    name: fileName
  };
  folders.update(data =>{
    const folder = findFolderById(data, $selectedFolder.id);
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


  function createFolder(folderName, parentFolder){
    const newFolder = {
      id: uuidv4(),
      name: folderName,
      files: [],
      level: parentFolder === null ? 'root' : parentFolder.level === 'root' ? 'first' : 'second'
    }
    folders.update(data =>{
      if (parentFolder === null) {
      data.push(newFolder);
      } else {
      const parent = findFolderById(data, parentFolder.id);
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
  
</script>

<div class="card">
  {#if showForm}
  <form>
  <table>
    <tr>
      <td><label for="fileName">File/Folder Name:</label></td>
      <td><input required placeholder = "Enter File/Folder Name" bind:value={name}/></td>
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
              <option value={file}>{file.name}</option>
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
        <button on:click="{onSave}">Save</button>
      </td>
      <td>
        <button on:click="{onCancel}">Cancel</button>
      </td>
    </tr>
  </table>
  </form>
  {/if}
  <div id="showHierarchy">
  {#if !showForm}
    <button on:click={()=>{ reset(); showForm = true}}>Back</button>
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
  {/if}
  </div>
</div>

<style>
  .card{
    background-color: #b8c0d8;
  }
  input {
		display: block;
		width: 193px;
    margin-bottom: 10px;
    height: 25px;
	}

  select {
		display: block;
		width: 200px;
    margin-bottom: 10px;
    text-align: center;
    height: 30px;
	}

  #folders{
    text-align: left;
    padding: 20px 40px 20px 20px;
  }

</style>