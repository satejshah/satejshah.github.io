<?php

echo "***** Satej Shah *****\n";

/* require_once "Mail.php";
error_reporting(E_ALL);
set_time_limit(0);

set_include_path(get_include_path() . PATH_SEPARATOR . './Classes/');

	function send_email ($subject, $message) {
		$fileType = 'Excel5';
		$fileName = 'JSG_Volleyball.xls';

		$bcc = "email";
		$i=0;
		
		$objReader = PHPExcel_IOFactory::createReader($fileType);
		$objPHPExcel = $objReader->load($fileName);

		$sheetData = $objPHPExcel->getActiveSheet()->toArray(null,true,true,true);

		foreach ($sheetData as $row_num => $row) {
			if (preg_match('/@/',$row['A'])) {
				if ($i === 0) {
					$bcc = $row['A'].", ";
					$i++;
				} else {
					$next_row = $row_num+1;
					$next_email = $objPHPExcel->getActiveSheet()->getCell('A'.$next_row)->getValue();
					if (preg_match('/@/', $next_email)) {
						$bcc .= $row['A'].", ";
					} else {
						$bcc .= $row['A'];
					}
				}
			}
		}*/
	
?>