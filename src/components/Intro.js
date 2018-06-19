import React from "react";
import { withRouter } from "react-router-dom";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

class Intro extends React.Component {

    render() {
        
        return (
           <React.Fragment>
               <nav className="navbar navbar-default fixed-top ">
                   <div className="container-fluid">
                       <div className="navbar-header">
                           <button type="button" className="navbar-toggle collapsed" data-toggle="collapse"
                                   data-target="#collapsebar" aria-expanded="false">
                               <span className="sr-only">Toggle navigation</span>
                               <span className="icon-bar"></span>
                               <span className="icon-bar"></span>
                           </button>
                           <a className="navbar-brand" href="/">Flight <i className="fas fa-plane"></i></a>

                       </div>
                       <div className="collapse navbar-collapse" id="collapsebar">
                           <ul className="nav navbar-nav navbar-right">
                               <li><a href="/login">Login <i className="fas fa-sign-in-alt"></i></a></li>
                               <li><a href="/register">Signup <i className="fas fa-user-plus"></i></a></li>
                           </ul>
                       </div>
                   </div>
               </nav>

               <ReactCSSTransitionGroup
                   transitionName="AppearTransition"
                   transitionAppear={ true }
                   transitionAppearTimeout={ 1000 }
                   transitionEnter={ false }
                   transitionLeave={ false }
               >

                   <div className="container">
                       <div className="jumbotron">
                           <h1>Welcome</h1>
                           <p>blablabla</p>
                           <p><a className="btn btn-primary btn-lg" href="/login">Get Started</a></p>
                       </div>
                       <div className="col-xs-12 col-md-5">
                           <h3 className="entry-title">使用说明</h3>
                           <div className="line"></div>
                           <span className="post"> <i className="fas fa-calendar-alt"></i> 2018.06.15 by zz</span>
                           <p className="para">新生申请接机: 请点击注册，填写个人信息(家乡，毕业院校等)，登陆后填写航班信息等，申请完成后，会进行匹配。接机人会根据接机时间等选择需要接机的新同学
                           ,匹配完成后会将微信号邮箱等联系方式发送给新同学。</p>
                           <p className="para">接机人申请: 注册时选择提供帮助，只支持edu邮箱注册，注册完成后登录即可浏览所有的接机请求，和新生个人信息,可选择提供帮助，点击提供帮助后会将您的联系方式发送给新生。</p>
                       </div>

                       <div className="col-xs-0 col-xs-2"></div>

                       <div className="col-xs-12 col-md-5">
                           <h3 className="entry-title">Intro to this web</h3>
                           <div className="line"></div>
                           <span className="post"> <i className="fas fa-calendar-alt"></i> 2018.06.15 by zz</span>
                           <p className="para">For new student: sign up as new student, fill in personal information(hometown, school,etc.),
                               login to fill in the form about your flight. After you submit the form, senior students will select the new students who need help.</p>
                           <p className="para">For senior students: sign up as senior student, only edu emails are supported, after registration, you can login to
                            view all pick-up requests, you can choose to provide help. After you click help, your contact info will be sent to
                            the new student.</p>
                       </div>

                   </div>

                   <p className="copyright">
                       2018-06
                   </p>


               </ReactCSSTransitionGroup>

           </React.Fragment>


        );
    }
}

export default withRouter(Intro);
 