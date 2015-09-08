define([
    "dojo/_base/kernel",
    "dgrid/Editor",
    "dgrid/Tree",
    "dgrid/Selection",
    "dgrid/OnDemandList",
    "dgrid/OnDemandGrid",
    "dgrid/Keyboard",
    "dgrid/extensions/ColumnReorder",
    "dgrid/extensions/ColumnResizer",
    "dgrid/extensions/CompoundColumns",
    "dgrid/extensions/Pagination",
    "dgrid/extensions/DnD",
    "dstore/Store",
    "dstore/Memory",
    "dstore/Tree",
    "dstore/Cache",
    "dstore/Trackable",
    "dstore/legacy/DstoreAdapter"

], function(){
    return dojo.dgrid;
});
