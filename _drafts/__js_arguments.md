When working with Javascript you'll quickly discover that functions don't require a fixed number of arguments. Meaning, I could pass in one argument:

  myFunc(arg1);

Or I could pass in five:

{% highlight javascript %}
  myFunc(arg1, arg2, arg3, arg4, arg5);
{% endhighlight %}
    
When instantiating a function, it really doesn't matter. It all depends on whether the code block within the function accesses the arguments. If it doesn't, they're simply ignored.

But what happens when I'm writing the function? How do I access the passed in values? 

Thankfully the designers of Javascript thought of this and provided us with a handy little object that's accessable via the "arguments" keyword.

This object is referred to as an "array like object". Meaning it has similar properties to an array, but doesn't perform like an array. For example, I can access the "length" property of the arguments object
  
    var myFunc = function() {
      return arguments.length;
    }
    myFunc(arg1, arg2); // 2
    
But I can't apply standard array methods like "join" to the arguments object. It simply doesn't exists, nor will it find it on the objects prototype chain.

So the question is, how can I turn the arguments object into an array for easy access and manipulation?

#### Turning arguments into an array.

To convert the arguments object into an array, we must access the "splice" method on the Array object's prototype and apply it to the arguments object. I know, that sounds confusing, hopefully the code snippet below will demonstrate what I'm trying to explain.

  var myFunc = function(){
      var args = Array.prototype.splice.call(arguments, 0);
      return args;
    };
    myFunc('string', 'another string'); // ['string', 'another string']
    
The call method takes two parameters, the object you're calling it on (context) and the arguments to be passed to the called method (list of values. We could use "apply" here and pass in an array of values). So in this case, we're calling "splice" on the arguments object and passing the parameter 0 to the splice method. 

This means, we're splicing zero items out of the arguments object (remeber, it's array like and the splice method can be applied to arrays) which returns an actual array. We can now access the argument values as an array.

  var myFunc = function(){
      var args = Array.prototype.splice.call(arguments, 0);
      return args.join(' ');
    };
    myFunc('string', 'another string'); // 'string another string'
    
Say we didn't want the first argument and only an array of the remaining arguments. Simply pass 1 to the splice method

  var myFunc = function(){
      var args = Array.prototype.splice.call(arguments, 1);
      return args;
    };
    myFunc('string', 'another string', 'something else');
    // ['another string', 'something else']
    
Hopefully this clears up the confusion around the arguments object. 

Happy Coding!