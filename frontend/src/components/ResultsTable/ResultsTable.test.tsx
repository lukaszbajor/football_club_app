import { render, screen } from "@testing-library/react";
import { ResultsTable } from "./ResultsTable";
import "@testing-library/jest-dom";

describe("ResultsTable", () => {
	it("Wyświetla nagłówki tabeli", () => {
		render(<ResultsTable />);

		expect(screen.getByText("Tabela ligowa")).toBeInTheDocument();
		expect(
			screen.getByText("Klasa B - Kolbuszowa 2025/2026")
		).toBeInTheDocument();
		expect(screen.getByText("Poz.")).toBeInTheDocument();
		expect(screen.getByText("Drużyna")).toBeInTheDocument();
		expect(screen.getByText("M")).toBeInTheDocument();
		expect(screen.getByText("P")).toBeInTheDocument();
		expect(screen.getByText("G+")).toBeInTheDocument();
		expect(screen.getByText("G-")).toBeInTheDocument();
	});

	it("Wyświetla drużynę klubową", () => {
		render(<ResultsTable />);
		expect(screen.getByText("Orzeł Kosowy")).toBeInTheDocument();
	});
	it("Wyświetla wszystkie drużyny na sezon 25/26", () => {
		render(<ResultsTable />);

		expect(screen.getByText("Orzeł Kosowy")).toBeInTheDocument();
		expect(screen.getByText("Huragan Przedbórz")).toBeInTheDocument();
		expect(screen.getByText("LKS Hucina")).toBeInTheDocument();
		expect(screen.getByText("Błękitni Siedlanka")).toBeInTheDocument();
		expect(screen.getByText("Marmury Przyłęk")).toBeInTheDocument();

		// liczba wierszy = 1 nagłówek + 5 drużyn
		const rows = screen.getAllByRole("row");
		expect(rows.length).toBe(6);
	});
});
