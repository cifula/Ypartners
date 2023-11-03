package com.YPartners.YRoom.advice;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import com.YPartners.YRoom.dto.ErrorResponseDto;
import com.YPartners.YRoom.exception.CustomException;

@RestControllerAdvice
public class AdviceController {

	@ExceptionHandler(CustomException.class)
	public ResponseEntity<?> customException(CustomException e) {
		return ResponseEntity.badRequest().body(new ErrorResponseDto<>(e.getMessage(), e.getErrorMap()));
	}
	
	
}
