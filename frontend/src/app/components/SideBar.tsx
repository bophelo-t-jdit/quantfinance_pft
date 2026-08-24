import Image from "next/image";
import styles from "./sidebar.module.css"

const logoPath = "";
const profilePhotoPath = "";

const navigationItems = [
    { label: "Dashboard", href: "/dashboard", active: true },
    { label: "Transactions", href: "/transactions" },
    { label: "Budgets", href: "/budgets" },
    { label: "Goals", href: "/goals" },
    { label: "Analytics", href: "/analytics" },
    { label: "Register/Login", href: "/login" },
];


function SideBar() {
    return(
        <aside className={styles.sidebar} aria-label="Primary navigation">
            <div className={styles.brand}>
                <div className={styles.logoPlaceholder} aria-label="Application logo placeholder">
                    {logoPath ? <Image src={logoPath} alt="" width={28} height={28} /> : null}
                </div>
                <span className={styles.brandName}>Finance Tracker</span>
            </div>

            <nav className={styles.navigation}>
                {navigationItems.map((item) => (
                    <a
                        className={`${styles.navigationLink} ${item.active ? styles.activeLink : ""}`}
                        href={item.href}
                        key={item.label}
                        aria-current={item.active ? "page" : undefined}
                    >
                        {item.label}
                    </a>
                ))}
            </nav>

            <div className={styles.profile}>
                <div className={styles.profilePhoto} aria-label="User photo placeholder">
                    {profilePhotoPath ? <Image src={profilePhotoPath} alt="Paul" width={58} height={58} /> : null}
                </div>
                <strong className={styles.profileName}>Paul</strong>
                <span className={styles.profileEmail}>pphoenix@gmail.com</span>
            </div>
        </aside>
    );
}

export default SideBar;