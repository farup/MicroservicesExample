service {
  name = "events"
  port = 9001
  check {
    id       = "events-check"
    name     = "Web Server Check"
    http     = "http://localhost:8081/"
    interval = "10s"
    timeout  = "1s"
  }
}