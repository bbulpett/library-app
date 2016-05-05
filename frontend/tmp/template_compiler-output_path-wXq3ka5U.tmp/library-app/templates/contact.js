export default Ember.HTMLBars.template((function() {
  var child0 = (function() {
    return {
      meta: {
        "fragmentReason": false,
        "revision": "Ember@2.4.5",
        "loc": {
          "source": null,
          "start": {
            "line": 10,
            "column": 1
          },
          "end": {
            "line": 14,
            "column": 2
          }
        },
        "moduleName": "library-app/templates/contact.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("  	");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","alert alert-success");
        var el2 = dom.createTextNode("\n  		");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  	");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]),1,1);
        return morphs;
      },
      statements: [
        ["content","responseMessage",["loc",[null,[12,4],[12,23]]]]
      ],
      locals: [],
      templates: []
    };
  }());
  return {
    meta: {
      "fragmentReason": {
        "name": "missing-wrapper",
        "problems": [
          "multiple-nodes"
        ]
      },
      "revision": "Ember@2.4.5",
      "loc": {
        "source": null,
        "start": {
          "line": 1,
          "column": 0
        },
        "end": {
          "line": 15,
          "column": 7
        }
      },
      "moduleName": "library-app/templates/contact.hbs"
    },
    isEmpty: false,
    arity: 0,
    cachedFragment: null,
    hasRendered: false,
    buildFragment: function buildFragment(dom) {
      var el0 = dom.createDocumentFragment();
      var el1 = dom.createElement("h1");
      var el2 = dom.createTextNode("Contact Page");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("form");
      dom.setAttribute(el1,"class","form-horizontal");
      var el2 = dom.createTextNode("\n  ");
      dom.appendChild(el1, el2);
      var el2 = dom.createComment("");
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n  ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("br");
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n  ");
      dom.appendChild(el1, el2);
      var el2 = dom.createComment("");
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n  ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("br");
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n	");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("button");
      dom.setAttribute(el2,"class","btn btn-primary btn-lg btn-block");
      var el3 = dom.createTextNode("Send Message");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n	");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("br");
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n");
      dom.appendChild(el1, el2);
      var el2 = dom.createComment("");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      return el0;
    },
    buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
      var element0 = dom.childAt(fragment, [2]);
      var element1 = dom.childAt(element0, [9]);
      var morphs = new Array(5);
      morphs[0] = dom.createMorphAt(element0,1,1);
      morphs[1] = dom.createMorphAt(element0,5,5);
      morphs[2] = dom.createAttrMorph(element1, 'disabled');
      morphs[3] = dom.createElementMorph(element1);
      morphs[4] = dom.createMorphAt(element0,13,13);
      return morphs;
    },
    statements: [
      ["inline","input",[],["type","email","value",["subexpr","@mut",[["get","emailAddress",["loc",[null,[4,29],[4,41]]]]],[],[]],"class","form-control","placeholder","Email address: ","autofocus","autofocus"],["loc",[null,[4,2],[4,116]]]],
      ["inline","textarea",[],["class","form-control","placeholder","Your message. (At least 5 characters.)","rows","7","value",["subexpr","@mut",[["get","message",["loc",[null,[6,102],[6,109]]]]],[],[]]],["loc",[null,[6,2],[6,111]]]],
      ["attribute","disabled",["get","isDisabled",["loc",[null,[8,61],[8,71]]]]],
      ["element","action",["sendMessage"],[],["loc",[null,[8,74],[8,98]]]],
      ["block","if",[["get","responseMessage",["loc",[null,[10,7],[10,22]]]]],[],0,null,["loc",[null,[10,1],[14,9]]]]
    ],
    locals: [],
    templates: [child0]
  };
}()));