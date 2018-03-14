// import React from 'react'
// import  { Map , TileLayer, Marker, Popup } from  'react-leaflet'

// class SimpleExample extends React.Component {
//   constructor() {
//     super()
//     this.state = {
//       lat: 51.505,
//       lng: -0.09,
//       zoom: 13
//     }
//   }

//   render() {
//     const position = [this.state.lat, this.state.lng];
//     return (
//       <Map center={position} zoom={this.state.zoom}>
//         <TileLayer
//           attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
//           url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
//         />
//         <Marker position={position}>
//           <Popup>
//             <span>A pretty CSS3 popup. <br/> Easily customizable.</span>
//           </Popup>
//         </Marker>
//       </Map>
//     );
//   }
// }
// module.exports = SimpleExample


import React from 'react';
// import MobileTearSheet from '../../../MobileTearSheet';
import {List, ListItem} from 'material-ui/List';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import ContentDrafts from 'material-ui/svg-icons/content/drafts';
import ContentSend from 'material-ui/svg-icons/content/send';
import Subheader from 'material-ui/Subheader';
import Toggle from 'material-ui/Toggle';
import Divider from 'material-ui/Divider';
import AccountCircle from 'material-ui-icons/AccountCircle';
import Search from 'material-ui-icons/Search';
import Assignment from 'material-ui-icons/Assignment';
import Update from 'material-ui-icons/Update';
import Notifications from 'material-ui-icons/Notifications';
import Book from 'material-ui-icons/Book';



import RaisedButton from 'material-ui/RaisedButton';

export default class ListExampleNested extends React.Component {

  state = {
    open: false,
  };

  handleToggle = () => {
    this.setState({
      open: !this.state.open,
    });
  };

  handleNestedListToggle = (item) => {
    this.setState({
      open: item.state.open,
    });
  };

  render() {
    return (
      <div>
        {/* <Toggle
          toggled={this.state.open}
          onToggle={this.handleToggle}
          labelPosition="right"
          label="This toggle controls the expanded state of the submenu item."
        /> */}
   {/* <div className="icon-username"><AccountCircle /> </div> */}
                {/* <div className="user-name">Trịn Đức Bảo Linh </div> */}
        <div className="col-md-12 menu">
        <div className="header-menu">BKTree</div>
        <div className="account-menu">
         
            <div className="user-avatar">
                            <img className="img-user" src="https://scontent.fhan5-1.fna.fbcdn.net/v/t1.0-1/c0.16.80.80/p80x80/28577300_2016525228560373_5392331788461853926_n.jpg?oh=821bf3b7ee04b7f7ffbd02e0cbc850bb&oe=5B037648" />
            </div>
        

           <div style={{float:"left"}} className="">
                            <div className="user-name">
                             Trịnh Đức Bảo Linh
                            </div>
                          
               </div>
        </div>

        </div>
        {/* <hr style={{}} /> */}
        <Divider />
        <br />
        <div>
          <List>
            <Subheader>Tìm kiếm</Subheader>
            <ListItem primaryText="Tìm đường" leftIcon={<Search />} />
         
            <ListItem primaryText="Cây cần hỗ trợ" leftIcon={<Search />} />
            <ListItem primaryText="Trạng thái của cây" leftIcon={<Search />} />
            <Divider />
            <Subheader>Thao tác</Subheader>   
            <ListItem primaryText="Quản lý cây" leftIcon={<Assignment />} />
            <ListItem primaryText="Cập nhật bản đồ" leftIcon={<Update />} />
            <ListItem primaryText="Thông báo" leftIcon={<Notifications />} />
            <ListItem primaryText="Thống kê/Báo cáo" leftIcon={<Book />} />

              {/* <ListItem
              primaryText="Inbox"
              leftIcon={<ContentInbox />}
              initiallyOpen={true}
              primaryTogglesNestedList={true}
              nestedItems={[
                <ListItem
                  key={1}
                  primaryText="Starred"
                  leftIcon={<ActionGrade />}
                />,
                <ListItem
                  key={2}
                  primaryText="Sent Mail"
                  leftIcon={<ContentSend />}
                  disabled={true}
                  nestedItems={[
                    <ListItem key={1} primaryText="Drafts" leftIcon={<ContentDrafts />} />,
                  ]}
                />,
                <ListItem
                  key={3}
                  primaryText="Inbox"
                  leftIcon={<ContentInbox />}
                  open={this.state.open}
                  onNestedListToggle={this.handleNestedListToggle}
                  nestedItems={[
                    <ListItem key={1} primaryText="Drafts" leftIcon={<ContentDrafts />} />,
                  ]}
                />,
              ]}
            /> */}
          </List>
        </div>
      </div>
    );
  }
}