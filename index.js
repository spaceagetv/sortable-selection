import Sortable from '/node_modules/sortablejs/modular/sortable.core.esm.js'
import SelectionArea from '/node_modules/@viselect/vanilla/lib/viselect.esm.js'

var parent = document.getElementsByClassName("parent");

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
    animation: 300
  });
}

const selection = new SelectionArea({
  selectables: ['.card']
})

