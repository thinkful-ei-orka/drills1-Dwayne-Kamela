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

  //self-reference

  function personMaker() {
    var person = {
      firstName: 'Paul',
      lastName: 'Jones',
      // replace `null` with a function that uses self reference to return
      // full name
      fullName: function() {
        return this.firstName + ' ' + this.lastName;
      },
    };
    return person;
  }
  
  //deleting keys

  const sampleObj = {
    foo: 'foo',
    bar: 'bar',
    bizz: 'bizz',
    bang: 'bang',
  };
  
  function keyDeleter(obj) {
    // your code here
  }