const rowsPerPage = 5;
let currentPage = 1;

const table = document.getElementById("myTable");
const rows = table.getElementsByTagName("tr");
const totalPages = Math.ceil((rows.length - 1) / rowsPerPage);
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const pageNum = document.getElementById("pageNum");

function showPage(page) {
	for (let i = 1; i < rows.length; i++) {
		rows[i].style.display = "none";
	}
	const start = (page - 1) * rowsPerPage + 1;
	const end = start + rowsPerPage - 1;
	for (let i = start; i <= end; i++) {
		if (rows[i]) {
			rows[i].style.display = "";
		}
	}
	pageNum.textContent = `Page ${page}`;
	prevBtn.classList.toggle("disabled", page === 1);
	nextBtn.classList.toggle("disabled", page === totalPages);
}

function changePage(direction) {
	const newPage = currentPage + direction;
	if (newPage >= 1 && newPage <= totalPages) {
		currentPage = newPage;
		showPage(currentPage);
	}
}
showPage(currentPage);