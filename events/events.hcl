service {
  name = "events"
  port = 9001
  check {
    name     = "events"
    http     = "http://localhost:9001/"
    interval = "10s"
    timeout  = "1s"
  }
}