package com.YPartners.YRoom.dto;

import java.time.LocalDate;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class ReservationDto {
	private LocalDate date;
	private int time;
	private int length;
	private String name;
}
