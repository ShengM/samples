<template>
  <div id="app">
    <h2>模板一：</h2>
    <renderless-tags-input v-model="tags" v-slot="{tags,removeTag,inputAttrs,inputEvents}">
      <div class="tags-input">
        <span v-for="(tag,index) in tags" :key="index" class="tags-input-tag">
          <span>{{tag}}</span>
          <button type="button" class="tags-input-remove" @click="()=>removeTag(tag)">&times;</button>
        </span>
        <input
          class="tags-input-text"
          placeholder="Add tag..."
          v-bind="inputAttrs"
          v-on="inputEvents"
        />
      </div>
    </renderless-tags-input>
    <h2>模板二：</h2>
    <renderless-tags-input v-model="tags" v-slot="{tags,addTag,removeTag,inputAttrs,inputEvents}">
      <div class="tags-input2">
        <div class="flex">
          <input
            class="tags-input2-text"
            type="text"
            placeholder="New tag"
            v-bind="inputAttrs"
            v-on="inputEvents"
          />
          <button class="tags-input2-add" type="button" @click="addTag">Add</button>
        </div>
        <ul class="tags-input2-tag">
          <li v-for="(tag,index) in tags" :key="index">
            <span class="tags-input2-tag-text">{{tag}}</span>
            <button class="tags-input2-remove" @click="()=>removeTag(tag)">Remove</button>
          </li>
        </ul>
      </div>
    </renderless-tags-input>
    <h2>包裹式组件：</h2>
    <inline-tags-input v-model="tags"></inline-tags-input>
  </div>
</template>

<script>
import RenderlessTagsInput from "./components/renderless-tags-input";
import InlineTagsInput from "./components/InlineTagsInput";

export default {
  name: "app",
  data() {
    return { tags: ["Testing", "Design"] };
  },
  components: {
    RenderlessTagsInput,
    InlineTagsInput
  }
};
</script>

<style scoped>
#app {
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

#app > h2 {
  margin-top: 5rem;
  margin-bottom: 0.5rem;
}

.tags-input {
  display: flex;
  width: 500px;
  flex-wrap: wrap;
  background-color: #fff;
  border-width: 1px;
  border-radius: 0.25rem;
  padding-left: 0.5rem;
  padding-right: 1rem;
  padding-top: 0.5rem;
  padding-bottom: 0.25rem;
}

.tags-input-tag {
  display: inline-flex;
  line-height: 1;
  align-items: center;
  font-size: 0.875rem;
  background-color: #bcdefa;
  color: #1c3d5a;
  border-radius: 0.25rem;
  user-select: none;
  padding: 0.25rem;
  margin-right: 0.5rem;
  margin-bottom: 0.25rem;
}

.tags-input-tag:last-of-type {
  margin-right: 0;
}

.tags-input-remove {
  color: #2779bd;
  font-size: 1.125rem;
  line-height: 1;
}

.tags-input-remove:first-child {
  margin-right: 0.25rem;
}

.tags-input-remove:last-child {
  margin-left: 0.25rem;
}

.tags-input-remove:focus {
  outline: 0;
}

.tags-input-text {
  flex: 1;
  outline: 0;
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
  margin-left: 0.5rem;
  margin-bottom: 0.25rem;
  min-width: 10rem;
}

.flex {
  display: flex;
}

.tags-input2 {
  width: 500px;
}

.tags-input2-text {
  width: 100%;
  flex: 1;
  background-color: #fff;
  border-width: 1px;
  border-radius: 0.25rem;
  margin-right: 0.5rem;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
}

.tags-input2-tag {
  padding-left: 1.5rem;
  margin-top: 1rem;
}

.tags-input2-tag-text {
  margin-right: 0.5rem;
}

.tags-input2-add {
  color: #fff;
  background-color: #6574cd;
  font-weight: 600;
  border-radius: 0.25rem;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
}

.tags-input2-add:hover {
  background-color: #7886d7;
}

.tags-input2-remove {
  text-decoration: underline;
  font-size: 0.875rem;
  color: #8795a1;
}

.tags-input-remove:hover {
  color: #3d4852;
}
</style>
