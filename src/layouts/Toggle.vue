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
  bottom: 0;
  background: #FFFFFF;
  -webkit-transition: 0.4s;
  transition: 0.4s;
  border: 1px solid #252c41;
  height: 21px;
  width: 41px;
}

.dark .toggler {
  border: 1px solid #FFFFFF;
}

.toggler:before {
  position: absolute;
  content: "";
  height: 19px;
  width: 19px;
  left: 1px;
  bottom: 0px;
  background: #252c41;
  -webkit-transition: 0.4s;
  transition: 0.4s;
  border: 1px solid #FFFFFF;
}

input:checked + .toggler {
  background: #FFFFFF;
}

input:focus + .toggler {
  box-shadow: 0 0 2px #e42c64;
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