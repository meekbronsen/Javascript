// What if the method does not take an object at the end
// Here are various solutions:

// SOL 1
const video1 = {
  title: "The Thundermans",
  tags: ["a", "b", "c"],
  showTags() {
    const self = this;
    this.tags.forEach(function (tag) {
      console.log(self.title, tag);
    });
  },
};

// learning how 'this' behaves inside a function and various methods to change 'this' pointing
function playVideo(a, b) {
  console.log(this);
}

playVideo.call({ title: "Harry Potter" });
playVideo.apply({ title: "Harry Potter" });
playVideo.bind({ title: "Harry Potter" })();

// SOL 2
const video2 = {
  title: "Victorious",
  tags: ["a", "b", "c"],
  showTags() {
    this /* the video object */.tags
      .forEach(function (tag) {
        console.log(this.title, tag); // 'this' is added after the callback function argument
      }, this); // but 'this' is not the preferred approach since some methods do not have thisArg at the end
  },
};


// SOL 3
const video3 = {
  title: "iCarly",
  tags: ["a", "b", "c"],
  showTags() {
    this.tags.forEach(
      function (tag) {
        console.log(this.title, tag);
      }.bind(this) // bind method add and the function it returns is called
    );
  },
};

// SOL4 the better and easier way of handling 'this' inside of callback functions
const video4 = {
  title: "Sam and Cat",
  tags: ["a", "b", "c"],
  showTags() {
    this.tags.forEach((tag) => {console.log(this.title, tag)}); // using the Arrow function 'this' will point to the object Video4
  },
};
