
# ALB
resource "aws_lb" "db_lb" {
  name               = "db-alb"
  internal           = true
  load_balancer_type = "application"
  security_groups    = [aws_security_group.db_sg.id]
  subnets            = var.private_subnet_ids

  tags = {
    Name = "web-alb"
  }
}

# Listener
resource "aws_lb_listener" "db_listener" {
  load_balancer_arn = aws_lb.db_lb.arn
  port              = "80"
  protocol          = "HTTP"

  default_action {
    type             = "forward"
    target_group_arn = aws_lb_target_group.db_tg.arn
  }
}


# Target Group
resource "aws_lb_target_group" "db_tg" {
  name        = "db-tg"
  port        = 80
  protocol    = "HTTP"
  vpc_id      = var.vpc_id
  target_type = "instance"

  health_check {
    path                = "/"
    interval            = 30
    timeout             = 5
    healthy_threshold   = 2
    unhealthy_threshold = 2
    matcher             = "200"
  }

  tags = {
    Name = "web-tg"
  }
}
