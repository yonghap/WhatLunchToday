<template>
	<div class="content">
		<div class="content__top">
			<h2 class="content__title">
				BANNER
				<small>
					HOME > BANNER
				</small>
			</h2>
			<div class="content__date">
				2022.05.12.
			</div>
		</div>
		<div class="content__wrap">
			<div class="row">
				<div class="box box--last">
					<div class="top">
						<div class="controls">
							<button type="button" class="controls__item">
								<i class="material-icons">
									remove_red_eye
								</i>
							</button>
							<button type="button" class="controls__item">
								<i class="material-icons">
									remove_circle
								</i>
							</button>
							<button type="button" class="controls__item">
								<i class="material-icons">
									delete
								</i>
							</button>
							<router-link to="/admin/banner/write" class="controls__item">
								<i class="material-icons">
									fiber_new
								</i>
							</router-link>
						</div>
					</div>
					<table class="table table--centered">
						<thead>
						<tr>
							<th style="width:80px">
								<button type="button" class="allcheck">
									<i class="material-icons">
										check_box_outline_blank
									</i>
								</button>
							</th>
							<th style="width:10%">No</th>
							<th style="width:10%">Order</th>
							<th>Subject</th>
							<th style="width:12%">Image</th>
							<th style="width:10%">On/Off</th>
							<th style="width:15%">Date</th>
						</tr>
						</thead>
						<tbody>

						<tr>
							<td>
								<i class="material-icons">
									check_box_outline_blank
								</i>
							</td>
							<td>6</td>
							<td>1</td>
							<td>
								<a href="#">
									2022年 임인년 즐거운 설 명절 보내세요
								</a>
							</td>
							<td>
								<img src="@/assets/images/temp1.jpg">
							</td>
							<td>
								N
							</td>
							<td>2022.05.05 12:12</td>
						</tr>
						<tr>
							<td>
								<i class="material-icons">
									check_box_outline_blank
								</i>
							</td>
							<td>5</td>
							<td>1</td>
							<td>
								<a href="#">
									대한민국 국가 대표 마스크 폴메이드
								</a>
							</td>
							<td>
								<img src="@/assets/images/temp2.jpg">
							</td>
							<td>
								N
							</td>
							<td>2022.05.05 12:12</td>
						</tr>
						<tr>
							<td>
								<i class="material-icons">
									check_box_outline_blank
								</i>
							</td>
							<td>4</td>
							<td>1</td>
							<td>
								<a href="#">
									비닷크리에이티브 7주년 기념
								</a>
							</td>
							<td>
								<img src="@/assets/images/temp3.jpg">
							</td>
							<td>
								N
							</td>
							<td>2022.05.05 12:12</td>
						</tr>
						<tr>
							<td>
								<i class="material-icons">
									check_box_outline_blank
								</i>
							</td>
							<td>3</td>
							<td>1</td>
							<td>
								<a href="#">
									2022年 임인년 즐거운 설 명절 보내세요
								</a>
							</td>
							<td>
								<img src="@/assets/images/temp1.jpg">
							</td>
							<td>
								N
							</td>
							<td>2022.05.05 12:12</td>
						</tr>
						<tr>
							<td>
								<i class="material-icons">
									check_box_outline_blank
								</i>
							</td>
							<td>2</td>
							<td>1</td>
							<td>
								<a href="#">
									대한민국 국가 대표 마스크 폴메이드
								</a>
							</td>
							<td>
								<img src="@/assets/images/temp2.jpg">
							</td>
							<td>
								N
							</td>
							<td>2022.05.05 12:12</td>
						</tr>
						<tr>
							<td>
								<i class="material-icons">
									check_box_outline_blank
								</i>
							</td>
							<td>1</td>
							<td>1</td>
							<td>
								<a href="#">
									비닷크리에이티브 7주년 기념
								</a>
							</td>
							<td>
								<img src="@/assets/images/temp3.jpg">
							</td>
							<td>
								N
							</td>
							<td>2022.05.05 12:12</td>
						</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	</div>
</template>