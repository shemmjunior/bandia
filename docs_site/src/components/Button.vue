<template>
  <button class="button-one"><span>Hover Me</span></button>
</template>

<script>
export default {
  name: "Button",
};
</script>

<style>
.button-one {
  text-align: center;
  cursor: pointer;
  font-size: 24px;
  margin: 0 0 0 100px;
}

/*Button One*/
.button-one {
  padding: 20px 60px;
  outline: none;
  background-color: #27ae60;
  border: none;
  border-radius: 5px;
  box-shadow: 0 9px #95a5a6;
}

.button-one:hover {
  background-color: #2ecc71;
}

.button-one:active {
  background-color: #2ecc71;
  box-shadow: 0 5px #95a5a6;
  transform: translateY(4px);
}
</style>