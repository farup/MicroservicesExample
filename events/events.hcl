service {
  name = "events"
  port = 9001
  check {
    id       = "events-check"
    name     = "events Server Check"
    http     = "http://localhost:9001/"
    interval = "10s"
    timeout  = "1s"
  }
}