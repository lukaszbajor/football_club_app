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
				path: "/rejestracja",
				element: <RegisterUser />,
			},
			{
				path: "/aktualnosci",
				element: <MainPage />,
			},
			{
				path: "/sklad",
				element: <MainPage />,
			},
			{
				path: "/akademia",
				element: <MainPage />,
			},
			{
				path: "/historia",
				element: <MainPage />,
			},
			{
				path: "/kontakt",
				element: <MainPage />,
			},
		],
	},
	{
		path: "/admin",
		element: <AdminLayout />,
	},
]);
