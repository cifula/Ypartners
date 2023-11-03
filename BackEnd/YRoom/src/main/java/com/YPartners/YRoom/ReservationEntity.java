package com.YPartners.YRoom;

import java.sql.Timestamp;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class ReservationEntity {
	private int id;
	private Timestamp dateTime;
	private String name;

}

