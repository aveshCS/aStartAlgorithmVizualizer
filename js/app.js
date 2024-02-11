let app = (function () {
  const initializeTheBoard = () => Grid.initTheGrid(40, 15);

  const findPath = () => {
    let path = AStar.findPath(Grid.outputGridAs2DArray());
    if (path) {
      Grid.walkOverPath(path);
    } else {
      startNoPathOverLay();
    }
  };

  const findPathWithCustomSpeed = () => {

        Grid.walkMedium();
        findPath();
        console.log(`Start`);
    
  };

  const launch = () => {
    initializeTheBoard();
    startFirstOverLay();
    typeWriter();
  };

  /**
   * Overlay effect
   */
  async function startFirstOverLay() {
    document.getElementById("overlay-1").style.display = "block";
    randomizeEffect();
    await sleep(3200);
    endFirstOverLay();
    startOnClickOverLay();
  }

  const endFirstOverLay = () => {
    document.getElementById("overlay-1").style.display = "none";
    randomizeEffect();
  };

  async function startNoPathOverLay() {
    // alert("There is no valid path")
    document.getElementById("overlay-2").style.display = "block";
    await sleep(4000);
    endNoPathOverLay();
  }

  const endNoPathOverLay = () => {
    document.getElementById("overlay-2").style.display = "none";
  };

  const startOnClickOverLay = () => {
    document.getElementById("overlay-3").style.display = "block";
    randomizeEffect();
  };

  const endClickOverLay = () => {
    document.getElementById("overlay-3").style.display = "none";
    randomizeEffect();
  };

  /**
   * Public Interface
   */
  return {
    launch: launch,
    findPath: findPath,
    findPathWithCustomSpeed: findPathWithCustomSpeed,
    endFirstOverLay: endFirstOverLay,
    startNoPathOverLay: startNoPathOverLay,
    endNoPathOverLay: endNoPathOverLay,
    endClickOverLay: endClickOverLay,
  };
})();
