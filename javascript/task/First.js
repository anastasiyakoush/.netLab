/*
https://repl.it/repls/WhimsicalMediocrePerimeter
https://repl.it/repls/WhimsicalMediocrePerimeter

*/

//a
(function сustomMapMethod() {
  "use strict";

  Array.prototype.map = function(projectionFunction) {
    let newArray = [];

    for (let i = 0; i < this.length; i++) {
      newArray.push(projectionFunction.call(this, this[i], i, this));
    }

    return newArray;
  };

  let isWork =
    JSON.stringify(
      [1, 2, 3].map(function(x) {
        return x + 1;
      })
    ) === "[2,3,4]";

  console.log(isWork);
})();

//б
let newReleases = [
  {
    id: 70111470,
    title: "Die Hard",
    boxart: "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
    uri: "http://api.netflix.com/catalog/titles/movies/70111470",
    rating: [4.0],
    bookmark: []
  },
  {
    id: 654356453,
    title: "Bad Boys",
    boxart: "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
    uri: "http://api.netflix.com/catalog/titles/movies/70111470",
    rating: [5.0],
    bookmark: [
      {
        id: 432534,
        time: 65876586
      }
    ]
  },
  {
    id: 65432445,
    title: "The Chamber",
    boxart: "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
    uri: "http://api.netflix.com/catalog/titles/movies/70111470",
    rating: [4.0],
    bookmark: []
  },
  {
    id: 675465,
    title: "Fracture",
    boxart: "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
    uri: "http://api.netflix.com/catalog/titles/movies/70111470",
    rating: [5.0],
    bookmark: [
      {
        id: 432534,
        time: 65876586
      }
    ]
  }
];

(function rebuildArray() {
  let result = newReleases.map(obj => ({ id: obj.id, title: obj.title }));
  console.log(result);
})();
//в
(function customFilterMethod() {
  "use strict";

  Array.prototype.filter = function(predicateFunction) {
    let newArray = [];

    for (let i = 0; i < this.length; i++) {
      if (predicateFunction(this[i])) {
        newArray.push(this[i]);
      }
    }

    return newArray;
  };

  let isWork =
    JSON.stringify(
      [1, 2, 3].filter(function(x) {
        return x > 2;
      })
    ) === "[3]";

  console.log(isWork);
})();

//г
(function displayRatingMoreThan5() {
  let result = newReleases.filter(x => x.rating == [5.0]).map(x => x.id);
  console.log(result);
})();

//д
(function customReduceMethod() {
  "use strict";

  Array.prototype.myReduce = function(combiner, initialValue) {
    let accumulator = initialValue || this[0];
    let index = initialValue ? 0 : 1;

    for (index; index < this.length; index++) {
      accumulator = combiner(accumulator, this[index], index, this);
    }

    return accumulator;
  };

  let isWork =
    [1, 2, 3].myReduce(function(memo, item) {
      return memo + item;
    }) === 6;

  console.log(isWork);

  isWork =
    [1, 2, 3].myReduce(function(memo, item) {
      return memo + item;
    }, 10) === 16;

  console.log(isWork);
})();

//д
let movieLists = [
  {
    name: "Instant Queue",
    videos: [
      {
        id: 70111470,
        title: "Die Hard",
        boxarts: [
          {
            width: 150,
            height: 200,
            url: "http://cdn-0.nflximg.com/images/2891/DieHard150.jpg"
          },
          {
            width: 200,
            height: 200,
            url: "http://cdn-0.nflximg.com/images/2891/DieHard200.jpg"
          }
        ],
        url: "http://api.netflix.com/catalog/titles/movies/70111470",
        rating: 4.0,
        bookmark: []
      },
      {
        id: 654356453,
        title: "Bad Boys",
        boxarts: [
          {
            width: 200,
            height: 200,
            url: "http://cdn-0.nflximg.com/images/2891/BadBoys200.jpg"
          },
          {
            width: 150,
            height: 200,
            url: "http://cdn-0.nflximg.com/images/2891/BadBoys150.jpg"
          }
        ],
        url: "http://api.netflix.com/catalog/titles/movies/70111470",
        rating: 5.0,
        bookmark: [{ id: 432534, time: 65876586 }]
      }
    ]
  },
  {
    name: "New Releases",
    videos: [
      {
        id: 65432445,
        title: "The Chamber",
        boxarts: [
          {
            width: 150,
            height: 200,
            url: "http://cdn-0.nflximg.com/images/2891/TheChamber150.jpg"
          },
          {
            width: 200,
            height: 200,
            url: "http://cdn-0.nflximg.com/images/2891/TheChamber200.jpg"
          }
        ],
        url: "http://api.netflix.com/catalog/titles/movies/70111470",
        rating: 4.0,
        bookmark: []
      },
      {
        id: 675465,
        title: "Fracture",
        boxarts: [
          {
            width: 200,
            height: 200,
            url: "http://cdn-0.nflximg.com/images/2891/Fracture200.jpg"
          },
          {
            width: 150,
            height: 200,
            url: "http://cdn-0.nflximg.com/images/2891/Fracture150.jpg"
          },
          {
            width: 300,
            height: 200,
            url: "http://cdn-0.nflximg.com/images/2891/Fracture300.jpg"
          }
        ],
        url: "http://api.netflix.com/catalog/titles/movies/70111470",
        rating: 5.0,
        bookmark: [{ id: 432534, time: 65876586 }]
      }
    ]
  }
];

(function getBoxartsArrayWithVideoSize150x200() {
  let result = [];

  movieLists.map(movie =>
    movie.videos.map(video => {
      const { id, title, boxarts } = video;
      let [url] = boxarts
        .filter(x => x.width == 150 && x.height == 200)
        .map(x => x.url);
      result.push({ id, title, boxart: url });
    })
  );
  console.log(result);
})();

//е
(function getMaxValue() {
  let ratings = [2, 3, 1, 4, 5];

  let result = ratings.reduce((max, current) =>
    current > max ? current : max
  );

  console.log(result);
})();

//ж
let boxarts = [
  {
    width: 200,
    height: 200,
    url: "http://cdn-0.nflximg.com/images/2891/Fracture200.jpg"
  },
  {
    width: 150,
    height: 200,
    url: "http://cdn-0.nflximg.com/images/2891/Fracture150.jpg"
  },
  {
    width: 300,
    height: 200,
    url: "http://cdn-0.nflximg.com/images/2891/Fracture300.jpg"
  },
  {
    width: 425,
    height: 150,
    url: "http://cdn-0.nflximg.com/images/2891/Fracture425.jpg"
  }
];

(function getUrlWithMaxSquare() {
  let square = (x, y) => x * y;

  let maxObject = boxarts
    .map((x, index) => ({ index: index, square: square(x.width, x.height) }))
    .reduce(
      (max, current, index) =>
        (max = current.square > max.square ? current : max)
    );

  let result = boxarts[maxObject.index].url;
  console.log(result);
})();

//з
let videos = [
  {
    id: 65432445,
    title: "The Chamber"
  },
  {
    id: 675465,
    title: "Fracture"
  },
  {
    id: 70111470,
    title: "Die Hard"
  },
  {
    id: 654356453,
    title: "Bad Boys"
  }
];

(function convertArrayToObject() {
  let result = videos.reduce((obj, current) => {
    obj[`"${current.id}"`] = current.title;

    return obj;
  }, {});

  console.log(result);
})();
