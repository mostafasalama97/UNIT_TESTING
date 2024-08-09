const shallowObjClone = require('./shallowObjClone')

test('create clone of the object parameter' , ()=>{
    const myObj = {name:"mostafa" , id : 25}
    expect(shallowObjClone(myObj)).toStrictEqual(myObj)
})

