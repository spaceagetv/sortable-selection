import { Sortable, MultiDrag } from '/node_modules/sortablejs/modular/sortable.core.esm.js'
import SelectionArea from '/node_modules/@viselect/vanilla/lib/viselect.esm.js'

var parent = document.getElementsByClassName("parent");

Sortable.mount(new MultiDrag());

new Sortable(parent[0], {
  group: { name: "parent-group" },
  animation: 300
});

var child = document.getElementsByClassName("child");

for (var i = 0; i < child.length; i++) {
  new Sortable(child[i], {
    group: {
      name: "child-group"
    },
    forceFallback: true,
    fallbackClass: "clone_card",
    animation: 300,
    multidrag: true,
    selectedClass: 'sortable-selected'
  });
}

const selection = new SelectionArea({
  selectables: ['.card']
})

