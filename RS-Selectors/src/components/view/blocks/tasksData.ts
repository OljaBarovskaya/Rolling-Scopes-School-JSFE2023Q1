import {ITasksContents} from '../../../types';

const tasksData: ITasksContents[] = [
  {
    levelNumber: 1,
    taskName:"Select all apples",
    htmlBlock1: "<apple class='animation-swing'></apple><apple class='animation-swing'></apple><pear></pear>",
    htmlBlock3: "<div class='block3-column-2nd'>&lt;apple>&lt;/apple></div><div class='block3-column-2nd'>&lt;apple>&lt;/apple></div><div class='block3-column-2nd'>&lt;pear>&lt;/pear></div>",
    helpContent: "tag",
    selector: 'apple',
  },
  {
    levelNumber: 2,
    taskName:"Select an apple that is in the middle",
    htmlBlock1: "<apple></apple><apple class='animation-swing' id='middle-apple'></apple><apple></apple>",
    htmlBlock3: "<div class='block3-column-2nd'>&lt;apple>&lt;/apple></div><div class='block3-column-2nd'>&lt;apple id='middle-apple'>&lt;/apple></div><div class='block3-column-2nd'>&lt;apple>&lt;/apple></div>",
    helpContent: "#id",
    selector: '#middle-apple'
  },
  {
    levelNumber: 3,
    taskName:"Select big apples",
    htmlBlock1: "<plate><apple></apple></plate><apple class='big animation-swing'></apple><plate><apple class='big animation-swing'></apple></plate><plate><apple></apple></plate>",
    htmlBlock3: "<div class='block3-column-2nd'>&lt;plate><div class='block3-column-3rd'>&lt;apple>&lt;/apple></div>&lt;/plate></div>      <div class='block3-column-2nd'>&lt;apple class='big'>&lt;/apple></div>         <div class='block3-column-2nd'>&lt;plate><div class='block3-column-3rd'>&lt;apple class='big'>&lt;/apple></div>&lt;/plate></div>       <div class='block3-column-2nd'>&lt;plate><div class='block3-column-3rd'>&lt;apple>&lt;/apple></div>&lt;/plate></div>",
    helpContent: "class",
    selector: '.big'
  },
  {
    levelNumber: 4,
    taskName:"Select big fruit",
    htmlBlock1: "<plate><apple></apple></plate><apple class='big animation-swing'></apple><plate><orange class='big animation-swing'></orange> </plate><wipers><apple></apple></wipers>",
    htmlBlock3: "<div class='block3-column-2nd'>&lt;plate><div class='block3-column-3rd'>&lt;apple>&lt;/apple></div>&lt;/plate></div><div class='block3-column-2nd'> &lt;apple class='big'>&lt;/apple></div><div class='block3-column-2nd'> &lt;plate><div class='block3-column-3rd'>&lt;orange class='big'>&lt;/orange></div>&lt;/plate></div><div class='block3-column-2nd'>  &lt;wipers><div class='block3-column-2nd'>&lt;apple>&lt;/apple></div>&lt;/wipers></div>",
    helpContent: "select a tag name4", 
    selector: '.big'
  },
  {
    levelNumber: 5,
    taskName:"Select all elements",
    htmlBlock1: '<plate class="animation-swing"></plate><wipers class="animation-swing"></wipers><plate class="animation-swing"><apple class="animation-swing"></apple></plate><orange class="animation-swing"></orange><plate class="animation-swing"><apple class="animation-swing"></apple><apple class="animation-swing"></apple></plate>',
    htmlBlock3: '<div class="block3-column-2nd">&lt;plate>&lt;/plate></div><div class="block3-column-2nd">&lt;wipers>&lt;/wipers></div><div class="block3-column-2nd">&lt;plate><div class="block3-column-3rd">&lt;apple>&lt;/apple></div>&lt;/plate></div><div class="block3-column-2nd">&lt;orange>&lt;/orange></div><div class="block3-column-2nd">&lt;plate><div class="block3-column-3rd">&lt;apple>&lt;/apple></div><div class="block3-column-3rd">&lt;apple>&lt;/apple></div>&lt;/plate></div>',
    helpContent: "select a tag name", 
    selector: '*'
  },
  {
    levelNumber: 6,
    taskName:"Select big apple",
    htmlBlock1: '<apple></apple><apple class="big animation-swing"></apple><apple></apple><pear></pear><pear class="big"></pear>',
    htmlBlock3: '<div class="block3-column-2nd">&lt;apple>&lt;/apple></div> <div class="block3-column-2nd">&lt;apple class="big">&lt;/apple></div><div class="block3-column-2nd">&lt;apple>&lt;/apple></div><div class="block3-column-2nd">&lt;pear>&lt;/pear></div><div class="block3-column-2nd">&lt;pear class="big">&lt;/pear></div>',
    helpContent: "select a tag name", 
    selector: 'apple.big'
  },
  {
    levelNumber: 7,
    taskName:"Select all fruit",
    htmlBlock1: '<plate></plate><wipers></wipers><plate><apple class="animation-swing"></apple></plate><orange class="animation-swing"></orange><plate><apple class="animation-swing"></apple><cherries class="animation-swing"></cherries></plate>',
    htmlBlock3: '<div class="block3-column-2nd">&lt;plate>&lt;/plate></div><div class="block3-column-2nd">&lt;wipers>&lt;/wipers></div><div class="block3-column-2nd">&lt;plate><div class="block3-column-3rd">&lt;apple>&lt;/apple></div>&lt;/plate></div><div class="block3-column-2nd">&lt;orange>&lt;/orange></div><div class="block3-column-2nd">&lt;plate><div class="block3-column-3rd">&lt;apple>&lt;/apple></div><div class="block3-column-3rd">&lt;cherries>&lt;/cherries></div>&lt;/plate></div>',
    helpContent: "select a tag name", 
    selector: 'apple, orange, cherries'
  },
  {
    levelNumber: 8,
    taskName:"Select apples on the plate",
    htmlBlock1: '<plate></plate><apple></apple><plate><apple class="animation-swing"></apple></plate><orange></orange><plate><apple class="animation-swing"></apple><apple class="animation-swing"></apple></plate>',
    htmlBlock3: '<div class="block3-column-2nd">&lt;plate>&lt;/plate></div><div class="block3-column-2nd">&lt;apple>&lt;/apple></div><div class="block3-column-2nd">&lt;plate><div class="block3-column-3rd">&lt;apple>&lt;/apple></div>&lt;/plate></div><div class="block3-column-2nd">&lt;orange>&lt;/orange></div><div class="block3-column-2nd">&lt;plate><div class="block3-column-3rd">&lt;apple>&lt;/apple></div><div class="block3-column-3rd">&lt;apple>&lt;/apple></div>&lt;/plate></div>',
    helpContent: "select a tag name", 
    selector:  'plate apple'
  },
  {
    levelNumber: 9,
    taskName:"Select big apples on the plate",
    htmlBlock1: '<plate><apple class="big animation-swing"></apple><apple class="big animation-swing"></apple></plate><plate><apple></apple></plate><plate><pear class="big"></pear></plate><apple class="big"></apple>',
    htmlBlock3: '<div class="block3-column-2nd">&lt;plate><div class="block3-column-3rd">&lt;apple class="big">&lt;/apple></div> <div class="block3-column-3rd">&lt;apple class="big">&lt;/apple></div>&lt;/plate></div><div class="block3-column-2nd">&lt;plate><div class="block3-column-3rd">&lt;apple>&lt;/apple></div>&lt;/plate></div><div class="block3-column-2nd">&lt;plate><div class="block3-column-3rd">&lt;pear class="big">&lt;/pear></div>&lt;/plate></div><div class="block3-column-2nd">&lt;apple class="big">&lt;/apple></div>',
    helpContent: "select a tag name", 
    selector: 'plate apple.big'
  },
  {
    levelNumber: 10,
    taskName:"Select first items that follow apples",
    htmlBlock1: '<apple></apple><apple class="animation-swing"></apple><plate class="animation-swing"></plate><apple></apple><pear class="animation-swing"></pear><pear></pear>',
    htmlBlock3: '<div class="block3-column-2nd">&lt;apple>&lt;/apple></div><div class="block3-column-2nd">&lt;apple>&lt;/apple></div><div class="block3-column-2nd">&lt;plate>&lt;/plate></div><div class="block3-column-2nd">&lt;apple>&lt;/apple></div><div class="block3-column-2nd"> &lt;pear>&lt;/pear></div><div class="block3-column-2nd"> &lt;pear>&lt;/pear></div>',
    helpContent: "select a tag name", 
    selector:  'apple + *'
  }
]

export default tasksData