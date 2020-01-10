<template>
    <div class="toggle-wrapper">
        <label class="toggle">
            <input 
            type="checkbox" 
            :checked="(mode === 'dark') ? 'checked' : false" 
            v-on:change="$emit('toggle')"
            />
            <span class="toggler round"></span>
        </label>
    </div>
</template>

<script>
export default {
  props: ['mode']
};
</script>

<style>
.toggle {
  position: relative;
  display: inline-block;
  width: 35px;
  height: 19px;
  margin-top: 8px;
  margin-left: 20px;
  margin-right: 35px;
}

.toggle input {
  opacity: 0;
  width: 0;
  height: 0;
}

.toggler {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #282c37;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

.toggler:before {
  position: absolute;
  content: "";
  height: 19px;
  width: 19px;
  left: -1px;
  bottom: 0px;
  background: #2b90d9;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

input:checked + .toggler {
  background: #FFFFFF;
}

input:focus + toggler {
  box-shadow: 0 0 2px #2196f3;
}

input:checked + .toggler:before {
  -webkit-transform: translateX(19px);
  -ms-transform: translateX(19px);
  transform: translateX(19px);
}

.toggler.round {
  border-radius: 19px;
}

.toggler.round:before {
  border-radius: 50%;
}
</style>