
# Launch Configuration for Auto Scaling Group
resource "aws_launch_configuration" "web_lc" {
  name_prefix     = "aura-web-lc-asg"
  image_id        = var.web_ami
  instance_type   = var.instance_type
  security_groups = [aws_security_group.web_sg.id]
  key_name        = var.key_name
  root_block_device {
    volume_type = "gp2"
    volume_size = 10
  }
  ebs_block_device {
    device_name = "/dev/sdh"
    volume_type = "gp2"
    volume_size = 20
  }

  lifecycle {
    create_before_destroy = true
  }
}
