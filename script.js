//drills 1

//object assignments

function createMyObject() {
    return {
      foo: 'bar',
      answerToUniverse: 42,
      'olly olly': 'oxen free',
      sayHello: function() {
        return 'hello';
      },
    };
  }

  //object updater

  function updateObject(obj) {
    obj.foo = 'foo';
    obj.bar = 'bar';
    obj.bizz = 'bizz';
    obj.bang = 'bang';
    return obj;
  }