import { Routes, Route, Link, Navigate, Outlet } from "react-router-dom";
import UserInfo from "./users/UserInfo";
import UserSeting from "./users/UserSeting";
import UserUpdatepwd from "./users/UserUpdatepwd";
import '../assets/css/user.css'
function User(){
    return(
        <div>
            <div className='userleft'>
                <ul>
                    <li>
                        <Link to="/user/userinfo">个人信息</Link>
                    </li>
                    <li>
                        <Link to="/user/userseting">个人设置</Link>
                    </li> <li>
                    <Link to="/user/userupdatepwd">修改密码</Link>
                </li>
                </ul>
            </div>
            <div className="usercontent">
                <Routes>
                    {/*路由正常配置，不需要添加一级路由      使用的时候再添加一级路由*/}
                    <Route exact path="/userinfo" element={<UserInfo/>} />
                    <Route path="/userseting" element={<UserSeting/>} />
                    <Route path="/userupdatepwd" element={<UserUpdatepwd/>} />
                    {/*重定向 默认显示第一个二级导航*/}
                    <Route path="" element={<Navigate to ="/user/userinfo" />}/>
                </Routes>
                {/*展示区*/}
                <Outlet />
            </div>
            <Slider
                size="small"
                defaultValue={70}
                aria-label="Small"
                valueLabelDisplay="auto"
            />
            <Slider defaultValue={50} aria-label="Default" valueLabelDisplay="auto" />
        </div>
    )
}
export default User

