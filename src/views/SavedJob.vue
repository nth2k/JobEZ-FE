<template>
  <div class="table-job">
		<div><span>// Việc làm đã lưu</span></div>
		<div>
			<table>
				<thead>
					<tr>
						<th>&nbsp;</th>
						<th>Công ty</th>
						<th>Vị trí công việc</th>
						<th>Hạn nộp</th>
						<th>&nbsp;</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td class="column"><span>1</span></td>
						<td>
							<div>Công ty 1</div>

							<div><a href="#">(Xem chi tiết)</a></div>
						</td>
						<td class="column"><span>Nhân viên</span></td>
						<td>
							<div>13/07/2020</div>

							<div><span>(Còn 13 ngày)</span></div>
						</td>
						<td class="column"><button class="btn btn-danger btnDelete"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
							  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
							  <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
							</svg> Xóa</button>
						</td>
					</tr>
					<tr>
						<td class="column"><span>1</span></td>
						<td>
							<div>Công ty 1</div>

							<div><a href="#">(Xem chi tiết)</a></div>
						</td>
						<td class="column"><span>Nhân viên</span></td>
						<td>
							<div>13/07/2020</div>

							<div><span>(Còn 13 ngày)</span></div>
						</td>
						<td class="column"><button class="btn btn-danger btnDelete"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
							  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
							  <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
							</svg> Xóa</button>
						</td>
					</tr>
					<tr>
						<td class="column"><span>1</span></td>
						<td>
							<div>Công ty 1</div>

							<div><a href="#">(Xem chi tiết)</a></div>
						</td>
						<td class="column"><span>Nhân viên</span></td>
						<td>
							<div>13/07/2020</div>

							<div><span>(Còn 13 ngày)</span></div>
						</td>
						<td class="column"><button class="btn btn-danger btnDelete"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
							  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
							  <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
							</svg> Xóa</button>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
</template>

<script>
export default {

}
</script>

<style scoped>
table{
			width: 100%;
			text-align: center;
		}
		thead{
			background-color:  #4C5BD4;
		}
		th{
			color:  white;
		}
		td{
			border: 1px solid lightgray;
			border-left: none;
			border-right: none;
		}
		a{
			text-decoration: none;
		}
		.btnDelete{
			border-radius: 50px;
		}
		.column{
			background-color: #F5F7F7;
		}
		.table-job{
			margin: 20px;
		}
		.update{
			background-color: #EDEDFDCC;
			width: fit-content;
			margin-left: auto;
			margin-right: auto;
			margin-top: 20px;
		}
		.update span{
			padding: 10px 20px 10px 17px;
		}
</style>