import SideBar from "../components/SideBar";
import styles from "./dashboard.module.css";
import Card from "../components/Card";


function Dashboard() {
    return (
        <div className={styles.dashboardShell}>
            <SideBar />
            <main className={styles.mainContent}>
                <p className={styles.eyebrow}>July 2026</p>
                <h1>Dashboard</h1>
                <p className={styles.subtitle}>Personal Finance Overview</p>

                <Card titleText={"Total Income"} amountOrRateText={0}/>
            </main>
        </div>
    );
}

export default Dashboard;