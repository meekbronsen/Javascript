// 'this' keyword points to the object holding the property

function Video() {
  console.log(this);
}

Video() // this will point to window or global


const video = {
  title: "Avengers",
  tags: ["a", "b", "c"],
  showTags() {
      this.tags.forEach( function(tag)  { // without the 'this' keyword, the line won't point to the video object
        console.log(tag);    
    });                                   
  },
};


const video2 = {
  title: "Avengers",
  tags: ["a", "b", "c"],
  showTags() {
      this.tags.forEach( function(tag)  { // observing how 'this' will behave inside of a callback funciton 
        console.log(this.title, tag);     // passing this keyword to reference the video object
    });                                   
  },
};

video2.showTags()