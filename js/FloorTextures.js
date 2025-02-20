const floorTextures = [
  {
      name: "Light Fine Wood",
      url: "rooms/textures/light_fine_wood.jpg",
      thumbnail: "rooms/thumbnails/light_fine_wood.jpg",
      autoRepeat: true,
      scale: 3,
  },
  {
      name: "Hard Wood",
      url: "rooms/textures/hardwood.png",
      thumbnail: "rooms/thumbnails/hardwood.png",
      autoRepeat: true,
      scale: 3,
  },
  {
      name: "Tiles1",
      url: "rooms/textures/tiles1.jpg",
      thumbnail: "rooms/thumbnails/tiles1.jpg",
      autoRepeat: true,
      scale: 3,
  },
  {
      name: "Patio Tiles",
      url: "rooms/textures/patio_tiles.jpg",
      thumbnail: "rooms/thumbnails/patio_tiles.jpg",
      autoRepeat: true,
      scale: 3,
  },
  {
      name: "Marble Tiles2",
      url: "rooms/textures/marble_tiles2.jpg",
      thumbnail: "rooms/thumbnails/marble_tiles2.jpg",
      autoRepeat: true,
      scale: 3,
  },
  {
      name: "Marble Tiles3",
      url: "rooms/textures/marble_tiles3.jpg",
      thumbnail: "rooms/thumbnails/marble_tiles3.jpg",
      autoRepeat: true,
      scale: 3,
  },
  {
      name: "Marble Tiles4",
      url: "rooms/textures/marble_tiles4.jpg",
      thumbnail: "rooms/thumbnails/marble_tiles4.jpg",
      autoRepeat: true,
      scale: 3,
  },
  {
      name: "Concrete",
      url: "rooms/textures/concrete.jpg",
      thumbnail: "rooms/thumbnails/concrete.jpg",
      autoRepeat: true,
      scale: 3,
  },
  {
      name: "Concrete2",
      url: "rooms/textures/concrete2.jpg",
      thumbnail: "rooms/thumbnails/concrete2.jpg",
      autoRepeat: true,
      scale: 3,
  },
  // {
  //     name: "",
  //     url: "rooms/textures/",
  //     thumbnail: "rooms/thumbnails/",
  //     autoRepeat: true,
  //     scale: 1,
  // },
];

export class FloorTextures {
    constructor() {
        this.init();
    }

    createItem(item) {
      return `
          <div class="col-sm-6" style="padding: 3px">
              <a href="#" class="thumbnail texture-select-thumbnail"
                  texture-url="${item.url}"
                  texture-autoRepeat="${item.autoRepeat}"
                  texture-scale="${item.scale}"
                  title="${item.name}">
                  <img alt="Thumbnail light brick" src="${item.thumbnail}" />
              </a>
          </div>
      `;
    }

    init() {
        var container = $("#floorTexturesDiv");

        let itemsStr = "";
        const items = floorTextures;
        for (var i = 0; i < items.length; i++) {
            itemsStr += this.createItem(items[i]);
        }

        const html = `
            <div class="panel panel-default">
                <div class="panel-heading">Adjust Floor</div>
                <div class="panel-body" style="color: #333333">
                    ${itemsStr}
                </div>
            </div>
        `;
        container.append(html);
    }
}