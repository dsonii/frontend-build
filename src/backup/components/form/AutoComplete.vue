<template>
  <div>
    <b-input-group>
      <template #prepend>
        <b-dropdown
          ref="dropdown"
          toggle-class="text-decoration-none"
          no-caret
          @toggle="dropdownToggle"
          @hide="dropdownHide"
          @shown="dropdownShow"
        >
          <template #button-content>
            &#x1f50d;<span class="sr-only">Search</span>
          </template>
          <b-dropdown-item
            v-for="item in items"
            :key="item"
            @click="selectItem(item)"
            >{{ item }}</b-dropdown-item
          >
        </b-dropdown>
      </template>
      <b-form-input
        ref="input"
        id="input-query"
        v-model="query"
        placeholder="Query"
      />
    </b-input-group>
    Selected: {{ selectedItem }}
  </div>
</template>

<script>
export default {
  props: ["q", "data"],
  data() {
    return {
      query: null,
      items: this.data,
      selectedItem: null,
      dropdownShown: false,
      forceShow: false,
      forceHide: false,
    };
  },
  watch: {
    query(val) {
      if (this.selectedItem && this.query != this.selectedItem) {
        this.selectedItem = null;
      }
      if (val && !this.selectedItem) {
        val = val.toLowerCase();
        this.items = this.data.filter((item) =>
          item.toLowerCase().includes(val)
        );
        if (this.items.length && !this.dropdownShown) {
          this.$refs.dropdown.show(false);
        }
      }
    },
  },
  methods: {
    dropdownToggle() {
      if (!this.dropdownShown) {
        this.forceShow = true;
      } else {
        this.forceHide = true;
      }
    },
    selectItem(item) {
      this.selectedItem = item;
      this.query = item;
      this.$emit("selected", item);
      this.$refs.dropdown.hide(false);
    },
    dropdownHide(bvEvent) {
      if (!this.selectedItem) {
        if (this.forceHide) {
          this.forceHide = false;
          this.dropdownShown = false;
        } else {
          bvEvent.preventDefault();
          // this.dropdownShown = true
        }
      } else {
        if (this.forceShow) {
          bvEvent.preventDefault();
          this.forceShow = false;
          // this.dropdownShown = true
        } else {
          this.dropdownShown = false;
        }
      }
    },
    dropdownShow() {
      this.dropdownShown = true;
      this.$refs.input.focus();
    },
  },
  mounted() {
    // to trigger watch
    this.query = this.q;
  },
};
</script>
