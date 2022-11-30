// Type of the class constructor
type Constructor = new (...args: any[]) => any;

// Class
function classDecorator(constructor: Constructor): any {
  // Calling in the creation of the class
  console.log('CLASS');
  console.log(constructor);
  console.log('###');
}

// Instance Method (Normal)
function methodDecorator(
  classPrototype: any,
  methodName: string,
  propertyDescriptor: PropertyDescriptor,
): any {
  // Calling in the creation of the method(dont need to call the method)
  console.log('NORMAL METHOD');
  console.log(classPrototype);
  console.log(methodName);
  console.log(propertyDescriptor);
  console.log('###');
}

// Static Method

function staticDecorator(
  classConstructor: Constructor,
  methodName: string,
  propertyDescriptor: PropertyDescriptor,
): any {
  // Calling in the creation of the method(dont need to call the method)
  console.log('STATIC METHOD');
  console.log(classConstructor);
  console.log(methodName);
  console.log(propertyDescriptor);
  console.log('###');
}

// Method Params

function paramsMethodDecorator(
  classPrototype: any,
  methodName: string,
  propertyIndex: number,
): any {
  console.log('PARAMS METHOD');
  console.log(classPrototype);
  console.log(methodName);
  console.log(propertyIndex);
  console.log('###');
}

// Params Static Method
function paramsStaticMethodDecorator(
  classPrototype: Constructor,
  methodName: string,
  propertyIndex: number,
): any {
  console.log('PARAMS STATIC METHOD');
  console.log(classPrototype);
  console.log(methodName);
  console.log(propertyIndex);
  console.log('###');
}

// Property
function propertyDecorator(classPrototype: any, propertyName: string): any {
  console.log('PROPERTY METHOD');
  console.log(classPrototype);
  console.log(propertyName);
  console.log('###');
}

// Static Property
function staticPropertyDecorator(
  classPrototype: any,
  propertyName: string,
): any {
  console.log('STATIC PROPERTY METHOD');
  console.log(classPrototype);
  console.log(propertyName);
  console.log('###');
}
