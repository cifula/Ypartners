package com.YPartners.YRoom;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface MainRepository {
	public List<LocalDateTime> getList(Map<String, Object> map);
	public int saveReservations(List<ReservationEntity> list);
	public Integer findReservationIdByDateTime(ReservationEntity entity);
}
