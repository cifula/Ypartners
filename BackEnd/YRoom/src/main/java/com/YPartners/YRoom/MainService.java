package com.YPartners.YRoom;

import java.sql.Timestamp;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Service;

import com.YPartners.YRoom.dto.ReservationDto;
import com.YPartners.YRoom.exception.CustomException;
import com.YPartners.YRoom.exception.ErrorMap;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class MainService {
	private final MainRepository mainRepository;
	
	public List<LocalDateTime> getList(String stringDate) {
		Map<String, Object> map = new HashMap<>();
		
        LocalDate date = LocalDate.parse(stringDate
                .replace("T", " ")
                .replace("Z", "")
                .substring(1, 11), DateTimeFormatter.ISO_DATE);
        LocalDateTime startDateTime = date.atTime(LocalTime.MIDNIGHT);
        LocalDateTime endDateTime = startDateTime.plusHours(23);

        map.put("startDateTime", Timestamp.valueOf(startDateTime));
        map.put("endDateTime", Timestamp.valueOf(endDateTime));
        
		return mainRepository.getList(map);
	}
	
	public int reservation(ReservationDto dto) {
		List<ReservationEntity> list = new ArrayList<>();
		
		
		for (int i = 0; i <dto.getLength(); i++) {
			ReservationEntity entity = ReservationEntity.builder()
					.dateTime(Timestamp.valueOf(convertDateToDateTime(dto.getDate(), dto.getTime() + i)))
					.name(dto.getName())
					.build();
			list.add(entity);
		}
		
		checkDuplicated(list);
		
		return mainRepository.saveReservations(list);
	}
	
	public void checkDuplicated(List<ReservationEntity> checkList) {
		checkList.forEach(entity -> {
			if(mainRepository.findReservationIdByDateTime(entity) != null) {
				throw new CustomException("Duplicated Reservation",
									ErrorMap.builder().put("error", "이미 예약된 시간입니다.").build());
			}
		});
	}
	
	
	public LocalDateTime convertDateToDateTime(LocalDate localDate, int time) {
		return localDate.atTime(LocalTime.MIDNIGHT).plusHours(time);
	}
}
