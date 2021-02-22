import React from "react";
class YouTubeDebugger extends React.Component {
  constructor() {
    super();
    this.state = {
      errors: [],
      user: null,
      settings: {
        bitrate: 8,
        video: {
          resolution: "1080p",
        },
      },
    };
  }

  handleBitrate = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        bitrate: 12,
      },
    });
  };

  handleResolution = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        video: {
          ...this.state.settings.video,
          resolution: "720p",
        },
      },
    });
  };

  // this.setState({
  //   addressInfo: Object.assign({}, this.state.addressInfo, {
  //     city: "New York City",
  //   }),
  // });

  render() {
    return (
      <div>
        <button className="bitrate" onClick={this.handleBitrate}></button>,
        <button className="resolution" onClick={this.handleResolution}></button>
      </div>
    );
  }
}

export default YouTubeDebugger;

// this.setState({
//   addressInfo: {
//     ...this.state.addressInfo,
//     city: "New York City",
//   },
// });

// const house = {
//   kitchen: {
//     cabinets: "white",
//     table: {
//       legs: 4,
//     },
//   },
// };

// // Note: `deepMerge()` isn't actually a built-in function
// const updatedHouse = deepMerge(house, {
//   kitchen: {
//     table: {
//       legs: 8,
//     },
//   },
// });
// // Deeply merging like this would only update the legs property with a value of 8, but the rest of the kitchen and house objects' structure will remain intact.

// // We can solve this using Object.assign() by merging the addressInfo object with the new data ourselves:
