package com.jdit.backendqf.response;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;

@RestController
public class PingController {
    @GetMapping("/api/ping")
    public String ping() {
        return "Backend is running!";
    }
}

