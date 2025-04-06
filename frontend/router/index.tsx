import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../src/components/Layout/Layout";
import { AdminLayout } from "../src/components/AdminLayout/AdminLayout";
import { RegisterUser } from "../src/views/RegisterUser/RegisterUser";
import { MainPage } from "../src/views/MainPage/MainPage";

export const router = createBrowserRouter([
	{
		path: "",
		element: <Layout />,
		children: [
			{
				path: "/",
				element: <MainPage />,
			},
			{
				path: "/register",
				element: <RegisterUser />,
			},
		],
	},
	{
		path: "/admin",
		element: <AdminLayout />,
	},
]);
