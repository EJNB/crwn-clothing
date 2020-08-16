import React from "react";
import MenuItem from "../menu-item/menu-item.component";
import "./directory.component.scss";

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: "HATS",
          imageUrl: "SHOP APP",
          id: 1,
        },
        {
          title: "JACKETS",
          imageUrl: "SHOP APP",
          id: 2,
        },
        {
          title: "SNEAKERS",
          imageUrl: "SHOP APP",
          id: 3,
        },
        {
          title: "WOMENS",
          imageUrl: "SHOP APP",
          size: "large",
          id: 4,
        },
        {
          title: "MENS",
          imageUrl: "SHOP APP",
          size: "large",
          id: 5,
        },
      ],
    };
  }

  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map((section) => {
          return (
            <MenuItem
              key={section.id}
              title={section.title}
              imageUrl={section.imageUrl}
              size={section.size}
            />
          );
        })}
      </div>
    );
  }
}

export default Directory;
