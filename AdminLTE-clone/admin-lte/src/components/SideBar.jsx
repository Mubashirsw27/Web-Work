import React from 'react'
import Admin from "../dist/img/AdminLTELogo.png";
import user2_1 from "../dist/img/user2-160x160.jpg";
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import SpeedIcon from '@material-ui/icons/Speed';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import ViewModuleIcon from '@material-ui/icons/ViewModule';
function SideBar() {
    return (
        <div>
            <aside className="main-sidebar sidebar-dark-primary elevation-4">
                {/* <!-- Brand Logo --> */}
                <a href="index3.html" className="brand-link">
                    <img src={Admin} alt="AdminLTE Logo" className="brand-image img-circle elevation-3" style={{opacity : ".8"}} />
                        <span className="brand-text font-weight-light">AdminLTE 3</span>
    </a>

                    {/* <!-- Sidebar --> */}
                    <div className="sidebar">
                        {/* <!-- Sidebar user panel (optional) --> */}
                        <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                            <div className="image">
                                <img src={user2_1} className="img-circle elevation-2" alt="User Image" />
        </div>
                                <div className="info">
                                    <a href="#" class="d-block">Alexander Pierce</a>
                                </div>
                            </div>

                            {/* <!-- SidebarSearch Form --> */}
                            <div className="form-inline">
                                <div className="input-group" data-widget="sidebar-search">
                                    <input className="form-control form-control-sidebar" type="search" placeholder="Search" aria-label="Search" Name />
                                        <div className="input-group-append">
                                            <button className="btn btn-sidebar">
                                                <i className="fas fa-search fa-fw">🔍</i>
                                            </button>
                                        </div>
        </div>
                                </div>

                                {/* <!-- Sidebar Menu --> */}
                                <nav className="mt-2">
                                    <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                                        {/* <!-- Add icons to the links using the .nav-icon class
               with font-awesome or any other icon font library --> */}
                                        <li className="nav-item menu-open">
                                            <a href="#" className="nav-link active">
                                                <i className="nav-icon fas fa-tachometer-alt"><SpeedIcon/></i>
                                                <p>
                                                    Starter Pages
                                                    <p className="right fas fa-angle-down"><ArrowDropDownIcon/></p>
                                                
                                                </p>
                                                
                                            </a>
                                            <ul className="nav nav-treeview">
                                                <li className="nav-item">
                                                    <a href="#" className="nav-link active">
                                                        <i className="far fa-circle nav-icon"><RadioButtonUncheckedIcon/> </i>
                                                        <p>Active Page</p>
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a href="#" className="nav-link">
                                                        <i className="far fa-circle nav-icon"><RadioButtonUncheckedIcon/></i>
                                                        <p>Inactive Page</p>
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="nav-item">
                                            <a href="#" className="nav-link">
                                                <i className="nav-icon fas fa-th"><ViewModuleIcon/></i>
                                                <p>
                                                    Simple Link
                                                    <span className="right badge badge-danger">New</span>
                                                </p>
                                            </a>
                                        </li>
                                    </ul>
                                </nav>
                                {/* <!-- /.sidebar-menu --> */}
                            </div>
                            {/* <!-- /.sidebar --> */}
            </aside>
                    </div>
                    )
}

                    export default SideBar;
