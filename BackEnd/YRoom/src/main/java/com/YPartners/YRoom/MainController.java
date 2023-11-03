package com.YPartners.YRoom;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.YPartners.YRoom.dto.ReservationDto;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
@CrossOrigin
public class MainController {
	private final MainService mainService;
	
	@GetMapping("/getlist")
	public ResponseEntity<?> getList(@RequestParam String date) {
		return ResponseEntity.ok().body(mainService.getList(date));
	}
	
	@PostMapping("/reservation")
	public ResponseEntity<?> reservation(@RequestBody ReservationDto dto) {
		return ResponseEntity.ok().body(mainService.reservation(dto));
	}
	
}
