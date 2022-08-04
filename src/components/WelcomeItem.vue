<template>
  <div class="item">
    <div v-if="d">
      <i>
        <slot name="icon"></slot>
      </i>
    </div>
      

    <div class="details">
      
      <div class="title">
        <div>
        <slot name="heading"></slot>
        </div>
      </div>
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
.item {
  margin-top: 2rem;
  display: flex;
  place-items: center;
}

.details {
  flex: 1;
  margin-left: 1rem;
  margin-right: 1rem;
  display: flex;
  flex-direction: column;
}

i {
  display: flex;
  place-items: center;
  place-content: center;
  width: 32px;
  height: 32px;

  color: var(--color-text);
}

.details .title {
  font-size: 1.2rem;
  font-weight: 500;
  margin-bottom: 0rem;
  color: var(--color-heading);
  line-height: 3rem;
  /* cursor: pointer; */
}

.details .title div{
  /* max-width: 100%; */
  cursor: pointer;
  width: fit-content;
}

.details .content {
  margin-bottom: 0.5rem;
}

@media (min-width: 1024px) {
  .item {
    margin-top: 2.75rem;
    padding: 0.4rem 0 1rem calc(var(--section-gap) / 2);
    width: 78.25rem;
    /* height: 8.375rem; */
    height: auto;
    /* background-color: aquamarine; */
    box-shadow:10px 5px 5px rgb(60 60 60/25%);
    border-color:#AFADB5/25%;
    border: 0.01px;
    border-style:solid;
  }

  i {
    /* top: calc(50% - 25px);
    left: -26px; */
    /* position: absolute; */
    border: 1px solid var(--color-border);
    background: var(--color-background);
    border-radius: 8px;
    width: 8.375rem;
    height: 8.375rem;
  }

  .item:before {
    content: ' ';
    border-left: 1px solid var(--color-border);
    position: absolute;
    left: 0;
    bottom: calc(50% + 25px);
    height: calc(50% - 25px);
  }

  .item:after {
    content: ' ';
    border-left: 1px solid var(--color-border);
    position: absolute;
    left: 0;
    top: calc(50% + 25px);
    height: calc(50% - 25px);
  }

  .item:first-of-type:before {
    display: none;
  }

  .item:last-of-type:after {
    display: none;
  }
}
</style>

<!-- <script>
export default {
  name:"WelcomeItem",
  props: {
    articleList:{
        type:Array,
        default:() => []
    }
  }
}
</script> -->