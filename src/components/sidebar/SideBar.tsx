import * as React from "react";
import { Link } from "react-router-dom";
import sb from "./sidebar.module.scss";

const SideBar: React.FC = () => {
    return (
        <div className={sb.sidebar}>
            <div className={sb.siderbarTitle}>
                <Link to="/">#</Link>
            </div>
            <div className={sb.sidebarItems}>
                <div className={sb.sidebarItem}>
                    <svg className="w-6 h-6" height="40" width="40" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient x1="0%" y1="100%" x2="100%" y2="0%" id="Arch_Amazon-CloudWatch_32_svg__a"><stop stopColor="#B0084D" offset="0%"></stop><stop stopColor="#FF4F8B" offset="100%"></stop></linearGradient></defs><g fill="none" fillRule="evenodd"><path d="M0 0h40v40H0z" fill="url(#Arch_Amazon-CloudWatch_32_svg__a)"></path><path d="M27.63 24.124c0-1.903-1.58-3.452-3.522-3.452-1.943 0-3.523 1.549-3.523 3.452 0 1.904 1.58 3.452 3.523 3.452 1.942 0 3.522-1.548 3.522-3.452zm1.006 0c0 2.447-2.032 4.439-4.528 4.439-2.497 0-4.53-1.992-4.53-4.439s2.033-4.438 4.53-4.438c2.496 0 4.528 1.991 4.528 4.438zm4.276 6.579l-3.387-2.99c-.289.418-.63.793-1.008 1.133l3.367 2.976a.781.781 0 001.085-.056.745.745 0 00-.057-1.063zm-8.804-1.154c3.051 0 5.535-2.433 5.535-5.425 0-2.991-2.484-5.424-5.535-5.424-3.052 0-5.536 2.433-5.536 5.424 0 2.992 2.484 5.425 5.536 5.425zm9.478.422a1.72 1.72 0 01.13 2.455 1.79 1.79 0 01-1.32.574c-.423 0-.847-.147-1.185-.445l-3.494-3.089a6.592 6.592 0 01-3.61 1.07c-3.606 0-6.541-2.877-6.541-6.412s2.935-6.41 6.542-6.41c3.607 0 6.541 2.875 6.541 6.41 0 .968-.226 1.883-.62 2.707l3.557 3.14zm-22.994-5.354h4.96v.987h-4.966c-.557-.006-1.156-.206-1.786-.596-1.044-.634-2.8-2.127-2.8-4.973 0-3.442 2.41-4.706 3.812-5.15a7.265 7.265 0 01-.016-.492c0-2.804 1.942-5.714 4.515-6.765 3.013-1.237 6.203-.623 8.531 1.638a8.456 8.456 0 011.786 2.563 3.404 3.404 0 012.177-.787c1.56 0 3.319 1.165 3.626 3.713C31.887 15.08 35 16.23 35 20.075c0 1.653-.567 2.99-1.687 3.972l-.672-.733c.898-.788 1.353-1.878 1.353-3.238 0-3.382-2.888-4.223-4.13-4.427a.5.5 0 01-.33-.207.486.486 0 01-.08-.378c-.147-2.074-1.438-3.036-2.65-3.036-.756 0-1.466.361-1.947.99a.513.513 0 01-.477.194.5.5 0 01-.398-.32c-.433-1.172-1.054-2.156-1.847-2.925-2.032-1.973-4.812-2.508-7.437-1.43-2.184.894-3.895 3.465-3.895 5.856 0 .268.016.536.048.794a.486.486 0 01-.122.387.51.51 0 01-.29.16c-1.297.327-3.433 1.32-3.433 4.301 0 2.25 1.266 3.492 2.327 4.138.473.292.896.44 1.26.444z" fill="#FFF"></path></g></svg>
                    <Link to="/logs">Logs</Link>
                </div>
            </div>
            <div className={sb.sidebarItems}>
                <div className={sb.sidebarItem}>
                    <svg className="w-6 h-6" height="40" width="40" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient x1="0%" y1="100%" x2="100%" y2="0%" id="Arch_AWS-Lambda_32_svg__a"><stop stopColor="#C8511B" offset="0%"></stop><stop stopColor="#F90" offset="100%"></stop></linearGradient></defs><g fill="none" fillRule="evenodd"><path d="M0 0h40v40H0z" fill="url(#Arch_AWS-Lambda_32_svg__a)"></path><path d="M14.386 33H8.27l6.763-14.426 3.064 6.44L14.387 33zm1.085-15.798a.49.49 0 00-.442-.282h-.002a.493.493 0 00-.441.285l-7.538 16.08a.507.507 0 00.028.482c.09.145.247.233.415.233h7.206c.19 0 .363-.111.445-.286l3.944-8.489a.508.508 0 00-.002-.432l-3.613-7.591zM32.018 33h-5.882l-9.47-20.711a.491.491 0 00-.444-.289H12.37l.005-5h7.549l9.424 20.71c.08.177.256.29.446.29h2.224v5zm.49-6h-2.4L20.684 6.29a.492.492 0 00-.446-.29h-8.353a.496.496 0 00-.491.5l-.006 6c0 .132.052.259.144.354a.488.488 0 00.347.146h4.032l9.468 20.711c.08.176.254.289.445.289h6.686a.495.495 0 00.491-.5v-6c0-.276-.219-.5-.491-.5z" fill="#FFF"></path></g></svg>
                    <Link to="/functions">Functions</Link>
                </div>
            </div>
            <div className={sb.sidebarItems}>
                <div className={sb.sidebarItem}>
                    <svg className="w-6 h-6" height="40" width="40" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient x1="0%" y1="100%" x2="100%" y2="0%" id="Arch_Amazon-API-Gateway_32_svg__a"><stop stopColor="#4D27A8" offset="0%"></stop><stop stopColor="#A166FF" offset="100%"></stop></linearGradient></defs><g fill="none" fillRule="evenodd"><path d="M0 0h40v40H0z" fill="url(#Arch_Amazon-API-Gateway_32_svg__a)"></path><path d="M19 28h2v-1h-2v1zM14 7.262l-7 3.04v20.055l7 2.439V7.262zM15 13v14h2v1h-2v5.5a.5.5 0 01-.664.472l-8-2.787A.5.5 0 016 30.713V9.974c0-.199.118-.379.301-.458l8-3.474A.5.5 0 0115 6.5V12h2v1h-2zm18-2.698l-7-3.04v25.534l7-2.439V10.302zm1-.328v20.739a.5.5 0 01-.336.472l-8 2.787a.507.507 0 01-.454-.064.5.5 0 01-.21-.408V28h-2v-1h2V13h-2v-1h2V6.5a.5.5 0 01.699-.458l8 3.474a.499.499 0 01.301.458zM19 13h2v-1h-2v1zm4.975 2.658l-.95-.316-3 9 .95.316 3-9zm-4.829 7.196l-3-3a.502.502 0 010-.708l3-3 .708.708-2.647 2.646 2.647 2.646-.708.708z" fill="#FFF"></path></g></svg>
                    <Link to="/apis">Api Gateway</Link>
                </div>
            </div>
        </div>
    );
};

export default SideBar;