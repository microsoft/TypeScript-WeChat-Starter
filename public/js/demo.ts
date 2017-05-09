wx.ready(() => {
    // open specifc location on map
    wx.openLocation({
        latitude: 0,
        longitude: 0,
        name: '',
        address: '',
        scale: 1,
        infoUrl: ''
    });
})

wx.error((err) => alert(err));
