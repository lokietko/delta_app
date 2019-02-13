import  React from "react";
import "./prize.css";


const Prize = () => {
return (
	<>
	<h1 className="prize">Cennik</h1>
	<div className="boxTables">
	<div className="tables">
		<h2>CENNIK BADAŃ PSYCHOLOGICZNYCH MEDYCYNY PRACY:</h2>
 <table>
 <tbody>
<tr>
	<th></th><th>cena</th>
</tr>
<tr>
	<td>Kierowca zawodowy</td><td>150*</td>
</tr>
<tr>
	<td>Kierowca do kursu C, D...</td><td>150*</td>
</tr>
		<tr>
			<td>Kierowca do kursu C, D</td><td>150*</td>
		</tr>
		<tr>
			<td>Kierowca TAXI</td><td>150*</td>
		</tr>
		<tr>
			<td>Kierowca -pojazd służbowy</td><td>100</td>
		</tr>
		<tr>
			<td>Operatorzy</td><td>60</td>
		</tr>
		<tr>
			<td>Pracownicy ochrony fizycznej</td><td>130</td>
		</tr>
		<tr>
			<td>Badania do pozwolenia na broń</td><td>200</td>
		</tr>
		<tr>
			<td>Praca na wysokości powyżej 3m</td><td>60</td>
		</tr>
		<tr><td>Pracownicy ochrony fizycznej</td><td>130</td></tr>
	</tbody>
</table>
</div>
<div className="tables secondDivTables">
<div>
		<h2>CENNIK BADAŃ LEKARSKICH MEDYCYNY PRACY:</h2>
		<table>
			<tbody>
				<tr>
					<th></th><th>cena</th>
				</tr>
				<tr>
					<td>Badanie lekarskie</td><td>200</td>
				</tr>
			</tbody>
		</table>
		</div>
		<div>
		<h2>CENNIK USŁUG KLINICZNYCH:</h2>
		<table>
			<tbody>
				<tr>
					<th></th><th>cena</th>
				</tr>
				<tr>
					<td>Porady/konsultacje</td><td>90</td>
				</tr>
				<tr>
					<td>Pakiet trzech spotkań konsultacyjnych</td><td>220</td>
				</tr>
			</tbody>
		</table>
		</div>
	</div>
		</div>
	</>

);
}
 
export default Prize;